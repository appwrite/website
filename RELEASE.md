# Steps to releasing a new Appwrite version

There are a handful of steps required to udpate the website for a new version of Appwrite:

1. Replace all references of appwrite/appwrite:x.y.z with the latest version
1. Update manual installation files
1. Bump appwrite repo so latest main commit is used

To simplify the process, you may use the following script:

```shell
#!/bin/bash

# exit on error
set -e

if [ -z "$1" ]
  then
    echo "Usage: $0 <version>"
    exit 1
fi

VERSION=$1

git stash
git checkout main
git pull
git checkout -b feat-$VERSION-release

# Replace all references of appwrite/appwrite:x.y.z with appwrite/appwrite:$VERSION
PATHS=(
  'src/routes/docs/advanced/self-hosting'
  'src/routes/blog/post'
)
for p in "${PATHS[@]}"; do
  grep -rl "appwrite/appwrite:[0-9]*\.[0-9]*\.[0-9]*" "$p" | xargs sed -i.bak "s#appwrite/appwrite:.*#appwrite/appwrite:$VERSION#g"
  git add "$p/**/*.markdoc"
  git add "$p/*.markdoc"
done

# Update manual installation files
cd static/install
docker run -it --rm \
    --volume /var/run/docker.sock:/var/run/docker.sock \
    --volume "$(pwd)"/appwrite:/usr/src/code/appwrite:rw \
    --entrypoint="install" \
    appwrite/appwrite:$VERSION --http-port=80 --https-port=443 --interactive=N --no-start=true
cp appwrite/docker-compose.yml compose
cp appwrite/.env env
sed -i.bak "s#_APP_OPENSSL_KEY_V1=.*#_APP_OPENSSL_KEY_V1=your-secret-key#g" env
sed -i.bak "s#_APP_DB_PASS=.*#_APP_DB_PASS=password#g" env
sed -i.bak "s#_APP_DB_ROOT_PASS=.*#_APP_DB_ROOT_PASS=rootsecretpassword#g" env
git add compose env
rm -rf appwrite
cd -

# Bump appwrite repo so latest main commit is used
pnpm update @appwrite.io/repo
git add pnpm-lock.yaml

git commit -m "Bump Appwrite version to $VERSION"

read -p "Ready to push? (y/n) " -n 1 -r
if [[ $REPLY =~ ^[Yy]$ ]]; then
  git push -u origin HEAD
fi
echo PR Link:
echo "https://github.com/appwrite/website/compare/main...feat-$VERSION-release?expand=1&title=Bump%20Appwrite%20version%20to%20$VERSION&body=%23%23%20What%20does%20this%20PR%20do%3F%0A%0AUpdate%20installation%20and%20upgrade%20instructions%20to%20use%20the%20latest%20Appwrite%20version%0A%0A%23%23%20Test%20Plan%0A%0AManual%0A%0A%23%23%20Related%20PRs%20and%20Issues%0A%0ANone%0A%0A%23%23%23%20Have%20you%20read%20the%20%5BContributing%20Guidelines%20on%20issues%5D%28https%3A%2F%2Fgithub.com%2Fappwrite%2Fappwrite%2Fblob%2Fmaster%2FCONTRIBUTING.md%29%3F%0A%0AYes"
echo
echo PR Subject:
echo "Bump Appwrite version to $VERSION"
echo
echo PR Body:
echo "## What does this PR do?

Update installation and upgrade instructions to use the latest Appwrite version

## Test Plan

Manual

## Related PRs and Issues

None

### Have you read the [Contributing Guidelines on issues](https://github.com/appwrite/appwrite/blob/master/CONTRIBUTING.md)?

Yes"
```

Run the script like:

```shell
./prep_release.sh 1.5.7
```

It will also output a link you can use to create PR with a populated description.
