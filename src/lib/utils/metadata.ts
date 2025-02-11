import type { AuthorData, PostsData, BreadcrumbData, PostSchemaData } from '$routes/blog/content';

export const DEFAULT_HOST = 'https://appwrite.io';
export const DEFAULT_DESCRIPTION =
    'Appwrite is an open-source platform for building applications at any scale, using your preferred programming languages and tools.';
export function buildOpenGraphImage(title: string, description: string): string {
    return `https://og.appwrite.global/image.png?title=${encodeURIComponent(
        title
    )}&subtitle=${encodeURIComponent(description)}`;
}

export function createSchemaAuthor(author: AuthorData): string {
    return (
        `< script type="application/ld+json">${JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: author.name,
            url: author.href,
            image: author.avatar
        })}</` + 'script>'
    );
}

export function createOrganizationSchema(){
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "url": "https://appwrite.io",
        "sameAs": ["https://www.linkedin.com/company/appwrite", "https://github.com/appwrite/appwrite",'https://www.producthunt.com/products/appwrite', 'https://x.com/appwrite' ],
        "name": "Appwrite",
        "legalName": "Appwrite Code Ltd.",
        "description": "A secure open-source backend server provides the core APIs required to build web and mobile applications. Appwrite provides authentication, database, storage, functions, messaging, and advanced realtime capabilities.",
        "logo": 'https://appwrite.io/assets/logotype/white.png',
    }      
}
// email, telephone, and foundingDate can be added


  export function createSoftwareAppSchema() {
    return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Appwrite",
    "applicationCategory": 'Software development',
    "featureList": "Authentication, Database, Storage, Functions, Messaging", 

    "audience": {
          "@type": "Audience",
          "audienceType": "Developers"
      },

    "aggregateRating": {
      "@type": "AggregateRating",
      "bestRating": "5",
      "ratingValue": "4.8",
      "ratingCount": "74"
  },

  "review": [
      {
          "@type": "Review",

              "author": {
          "@type": "Person",
          "name": "t4zzlerdeveloper"
          },
          
          "datePublished": "2024-03-01",
          "reviewBody": "Great Tool to quickly deploy applications without worrying about security and performance issues. The SDK are built really well and the documentation is exceptionally good!!",
          "name": "Appwrite",
          "reviewRating": {
              "@type": "Rating",
              "bestRating": "5",
              "worstRating": "1",
              "ratingValue": "5"
          }
      },

      {
          "@type": "Review",

          "author": {
          "@type": "Person",
          "name": "Jason Torres"
          },
          
          "datePublished": "2024-06-01",
          "reviewBody": "Top tier when it comes to BaaS with a robust free tier!",
          "name": "Appwrite",
          "reviewRating": {
              "@type": "Rating",
              "bestRating": "5",
              "worstRating": "1",
              "ratingValue": "5"
          }
      }, 
  ]
}
}

export function createSchemaPost(post: PostSchemaData) {
    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": [post.cover],
        "datePublished": post.date.toISOString(),
        "author": [{
            "@type": "Person",
            "name": post.author,
            "url": post.avatar
        }]
    }
}

// "dateModified" can be added to post schema

export function createBreadcrumbsSchema(articleInfo: BreadcrumbData) {
    return {

        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        
        "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Blog",
            "item": "https://appwrite.io/blog"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": articleInfo.category,
            "item": `https://appwrite.io/blog?category=${articleInfo.category}`
        },
        {
            "@type": "ListItem",
            "position": 3,
            "name": articleInfo.title,
            "item": articleInfo.url
        }
    ]
}
  };