<script lang="ts">
    import { Platform } from '$lib/utils/references';
    import MultiCodeContextless from '$routes/products/messaging/(components)/MultiCodeContextless.svelte';

    const codeTopic = [
        {
            language: 'server-nodejs',
            platform: 'Web',
            content: `import { Client } from 'node-appwrite';

// This is your Appwrite function
// It's executed each time we get a request
export default async ({ req, res, log, error }) => {
  // Why not try the Appwrite SDK?
  //
  // Set project and set API key
  // const client = new Client()
  //    .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
  //    .setKey(req.headers['x-appwrite-key']);

  // You can log messages to the console
  log('Hello, Logs!');

  // If something goes wrong, log an error
  error('Hello, Errors!');

  // The 'req' object contains the request data
  if (req.method === 'GET') {
    // Send a response with the res object helpers
    // 'res.text()' dispatches a string back to the client
    return res.text('Hello, World!');
  }

  // 'res.json()' is a handy helper for sending JSON
  return res.json({
    motto: 'Build like a team of hundreds_',
    learn: 'https://appwrite.io/docs',
    connect: 'https://appwrite.io/discord',
    getInspired: 'https://builtwith.appwrite.io',
  });
};
`
        },
        {
            language: 'php',
            platform: 'PHP',
            content: `require(__DIR__ . '/../vendor/autoload.php');

use Appwrite\Client;
use Appwrite\Exception;

// This is your Appwrite function
// It's executed each time we get a request
return function ($context) {
    // Why not try the Appwrite SDK?
    //
    // Set project and set API key
    // $client = (new Client())
    //      ->setProject(getenv(APPWRITE_FUNCTION_PROJECT_ID))
    //      ->setKey($context->req->headers['x-appwrite-key']);
   
    // You can log messages to the console
    $context->log('Hello, Logs!');

    // If something goes wrong, log an error
    $context->error('Hello, Errors!');

    // The 'req' object contains the request data
    if ($context->req->method === 'GET') {
        // Send a response with the res object helpers
        // 'res.text()' dispatches a string back to the client
        return $context->res->text('Hello, World!');
    }

    // 'res.json()' is a handy helper for sending JSON
    return $context->res->json([
        'motto' => 'Build like a team of hundreds_',
        'learn' => 'https://appwrite.io/docs',
        'connect' => 'https://appwrite.io/discord',
        'getInspired' => 'https://builtwith.appwrite.io',
    ]);
};
`
        },
        {
            language: 'python',
            platform: 'Python',
            content: `from appwrite.client import Client
import os


# This is your Appwrite function
# It's executed each time we get a request
def main(context):
    # Why not try the Appwrite SDK?
    #
    # Set project and set API key
    # client = (
    #     Client()
    #        .set_project(os.environ["APPWRITE_FUNCTION_PROJECT_ID"])
    #        .set_key(context.req.headers["x-appwrite-key"])
    # )

    # You can log messages to the console
    context.log("Hello, Logs!")

    # If something goes wrong, log an error
    context.error("Hello, Errors!")

    # The 'context.req' object contains the request data
    if context.req.method == "GET":
        # Send a response with the res object helpers
        # 'context.res.text()' dispatches a string back to the client
        return context.res.text("Hello, World!")

    # 'context.res.json()' is a handy helper for sending JSON
    return context.res.json({
        "motto": "Build like a team of hundreds_",
        "learn": "https://appwrite.io/docs",
        "connect": "https://appwrite.io/discord",
        "getInspired": "https://builtwith.appwrite.io",
    })
`
        },
        {
            language: 'ruby',
            content: `require "appwrite"

# This is your Appwrite function
# It's executed each time we get a request
def main(context)
  # Why not try the Appwrite SDK?
  #
  # Set project and set API key
  # client = Client.new
  #   .set_project(ENV['APPWRITE_FUNCTION_PROJECT_ID'])
  #   .set_key(context.req.headers['x-appwrite-key'])

  # You can log messages to the console
  context.log("Hello, Logs!")

  # If something goes wrong, log an error
  context.error("Hello, Errors!")

  # The 'context.req' object contains the request data
  if (context.req.method == "GET")
    # Send a response with the res object helpers
    # 'context.res.text()' dispatches a string back to the client
    return context.res.text("Hello, World!")
  end

  # 'context.res.json()' is a handy helper for sending JSON
  return context.res.json({
    "motto": "Build like a team of hundreds_",
    "learn": "https://appwrite.io/docs",
    "connect": "https://appwrite.io/discord",
    "getInspired": "https://builtwith.appwrite.io",
  })
end
`
        },
        {
            language: 'deno',
            content: `import { Client } from "https://deno.land/x/appwrite@7.0.0/mod.ts";

// This is your Appwrite function
// It's executed each time we get a request
export default ({ req, res, log, error }: any) => {
  // Why not try the Appwrite SDK?
  //
  // Set project and set API key
  // const client = new Client()
  //    .setProject(Deno.env.get("APPWRITE_FUNCTION_PROJECT_ID") || "")
  //    .setKey(req.headers["x-appwrite-key"] || "");

  // You can log messages to the console
  log("Hello, Logs!");

  // If something goes wrong, log an error
  error("Hello, Errors!");

  // The 'req' object contains the request data
  if (req.method === "GET") {
    // Send a response with the res object helpers
    // 'res.text()' dispatches a string back to the client
    return res.text("Hello, World!");
  }

  // 'res.json()' is a handy helper for sending JSON
  return res.json({
    motto: "Build like a team of hundreds_",
    learn: "https://appwrite.io/docs",
    connect: "https://appwrite.io/discord",
    getInspired: "https://builtwith.appwrite.io",
  });
};
`
        },
        {
            language: 'go',
            content: `package handler

import (
	"fmt"
	"os"
	"github.com/appwrite/sdk-for-go/appwrite"
	"github.com/open-runtimes/types-for-go/v4/openruntimes"
)

type Response struct {
	Motto       string 'json:"motto"'
	Learn       string 'json:"learn"'
	Connect     string 'json:"connect"'
	GetInspired string 'json:"getInspired"'
}

func Main(Context openruntimes.Context) openruntimes.Response {
	// This is your Appwrite function
	// It's executed each time we get a request service
	var _ = appwrite.NewClient(
		appwrite.WithProject(os.Getenv("APPWRITE_FUNCTION_PROJECT_ID")),
		appwrite.WithKey(Context.Req.Headers["x-appwrite-key"]),
	)

	// You can log messages to the console
	fmt.Println("Hello, Logs!")

	fmt.Fprintln(os.Stderr, "Error:", "Hello, Errors!")

	// The 'Context.Req' object contains the request data
	if Context.Req.Method == "GET" {
		// Send a response with the Context.Res object helpers
		// 'Context.Res.Text()' dispatches a string back to the client
		return Context.Res.Text("Hello, World!")
	}

	// 'res.json()' is a handy helper for sending JSON
	return Context.Res.Json(
		Response{
			Motto:       "Build like a team of hundreds_",
			Learn:       "https://appwrite.io/docs",
			Connect:     "https://appwrite.io/discord",
			GetInspired: "https://builtwith.appwrite.io",
		})
}
`
        },
        {
            language: 'dart',
            content: `import 'dart:async';
import 'package:dart_appwrite/dart_appwrite.dart';

// This is your Appwrite function
// It's executed each time we get a request
Future main(final context) async {
  // Why not try the Appwrite SDK?
  //
  // Set project and set API key
  // final client = Client()
  //    .setProject(Platform.environment['APPWRITE_FUNCTION_PROJECT_ID'])
  //    .setKey(context.req.headers['x-appwrite-key']);


  // You can log messages to the console
  context.log('Hello, Logs!');

  // If something goes wrong, log an error
  context.error('Hello, Errors!');

  // The 'req' object contains the request data
  if (context.req.method == 'GET') {
    // Send a response with the res object helpers
    // 'res.text()' dispatches a string back to the client
    return context.res.text('Hello, World!');
  }

  // 'res.json()' is a handy helper for sending JSON
  return context.res.json({
    'motto': 'Build like a team of hundreds_',
    'learn': 'https://appwrite.io/docs',
    'connect': 'https://appwrite.io/discord',
    'getInspired': 'https://builtwith.appwrite.io',
  });
}
`
        },
        {
            language: 'kotlin',
            content: `package io.openruntimes.kotlin.src

import io.openruntimes.kotlin.RuntimeContext
import io.openruntimes.kotlin.RuntimeOutput
import io.appwrite.Client
import java.util.HashMap

class Main {
    // This is your Appwrite function
    // It's executed each time we get a request
    fun main(context: RuntimeContext): RuntimeOutput {
        // Why not try the Appwrite SDK?
        //
        // Set project and set API key
        // val client = Client()
        //    .setProject(System.getenv("APPWRITE_FUNCTION_PROJECT_ID"))
        //    .setKey(context.req.headers["x-appwrite-key"])

        // You can log messages to the console
        context.log("Hello, Logs!")

        // If something goes wrong, log an error
        context.error("Hello, Errors!")

        // The 'context.req' object contains the request data
        if (context.req.method == "GET") {
            // Send a response with the res object helpers
            // 'context.res.text()' dispatches a string back to the client
            return context.res.text("Hello, World!")
        }

        // 'context.res.json()' is a handy helper for sending JSON
        return context.res.json(mutableMapOf(
            "motto" to "Build like a team of hundreds_",
            "learn" to "https://appwrite.io/docs",
            "connect" to "https://appwrite.io/discord",
            "getInspired" to "https://builtwith.appwrite.io"
        ))
    }
}
`
        },
        {
            language: 'java',
            content: `package io.openruntimes.java.src;

import io.openruntimes.java.RuntimeContext;
import io.openruntimes.java.RuntimeOutput;
import java.util.HashMap;
import io.appwrite.Client;

public class Main {

    // This is your Appwrite function
    // It's executed each time we get a request
    public RuntimeOutput main(RuntimeContext context) throws Exception {
        // Why not try the Appwrite SDK?
        //
        // Set project and set API key
        // Client client = new Client();
        //     .setProject(System.getenv("APPWRITE_FUNCTION_PROJECT_ID"))
        //     .setKey(context.getReq().getHeaders().get("x-appwrite-key"));

        // You can log messages to the console
        context.log("Hello, Logs!");

        // If something goes wrong, log an error
        context.error("Hello, Errors!");

        // The 'context.getReq()' object contains the request data
        if (context.getReq().getMethod().equals("GET")) {
            // Send a response with the res object helpers
            // 'context.getRes().text()' dispatches a string back to the client
            return context.getRes().text("Hello, World!");
        }

        Map json = new HashMap<>();
        json.put("motto", "Build like a team of hundreds_");
        json.put("learn", "https://appwrite.io/docs");
        json.put("connect", "https://appwrite.io/discord");
        json.put("getInspired", "https://builtwith.appwrite.io");

        // 'context.getRes().json()' is a handy helper for sending JSON
        return context.getRes().json(json);
    }
}
`
        },
        {
            language: 'swift',
            content: `import Appwrite
import AppwriteModels
import Foundation

// This is your Appwrite function
// It's executed each time we get a request
func main(context: RuntimeContext) async throws -> RuntimeOutput {
    // Why not try the Appwrite SDK?
    //
    // Set project and set API key
    // let client = Client()
    //    .setProject(ProcessInfo.processInfo.environment["APPWRITE_FUNCTION_PROJECT_ID"])
    //    .setKey(context.req.headers["x-appwrite-key"] ?? "")

    // You can log messages to the console
    context.log("Hello, Logs!")

    // If something goes wrong, log an error
    context.error("Hello, Errors!")

    // The 'context.req' object contains the request data
    if context.req.method == "GET" {
        // Send a response with the res object helpers
        // 'res.text()' dispatches a string back to the client
        return context.res.text("Hello, World!")
    }

    // 'context.res.json()' is a handy helper for sending JSON
    return try context.res.json([
        "motto": "Build like a team of hundreds_",
        "learn": "https://appwrite.io/docs",
        "connect": "https://appwrite.io/discord",
        "getInspired": "https://builtwith.appwrite.io",
    ])
}
`
        },
        {
            language: 'csharp',
            content: `namespace DotNetRuntime;

using Appwrite;
using Appwrite.Services;
using Appwrite.Models;

public class Handler {

    // This is your Appwrite function
    // It"s executed each time we get a request
    public async Task Main(RuntimeContext Context) 
    {
        // Why not try the Appwrite SDK?
        //
        // Set project and set API key
        // var client = new Client()
        //     .SetProject(Environment.GetEnvironmentVariable("APPWRITE_FUNCTION_PROJECT_ID")) 
        //     .SetKey(Context.Req.Headers["x-appwrite-key"]);

        // You can log messages to the console
        Context.Log("Hello, Logs!");

        // If something goes wrong, log an error
        Context.Error("Hello, Errors!");

        // The 'Context.Req' object contains the request data
        if (Context.Req.Method == "GET") {
            // Send a response with the res object helpers
            // 'Context.Res.Text()' dispatches a string back to the client
            return Context.Res.Text("Hello, World!");
        }

        // 'Context.Res.Json()' is a handy helper for sending JSON
        return Context.Res.Json(new Dictionary()
        {
            { "motto", "Build like a team of hundreds_" },
            { "learn", "https://appwrite.io/docs" },
            { "connect", "https://appwrite.io/discord" },
            { "getInspired", "https://builtwith.appwrite.io" },
        });
    }
}
`
        }
    ];
</script>

<section class="pt-12 pb-40 md:pt-32">
    <div class="container flex flex-col items-center justify-between md:flex-row md:gap-6">
        <div class="mb-10 flex w-full flex-col md:max-w-lg">
            <h2 class="text-title text-primary font-aeonik-pro my-4">
                Run in your preferred<br /> languages
            </h2>
            <p class="text-body text-secondary font-medium">
                Appwrite Functions support a variety of<br /> languages, ensuring flexibility and<br
                /> compatibility in your projects.
            </p>

            <a
                href="/docs/products/functions/runtimes"
                class="web-button is-secondary mt-8 !w-full md:!w-fit">Learn more</a
            >
        </div>

        <div>
            <MultiCodeContextless data={codeTopic} selected={Platform.ServerNodeJs} height={450} />
        </div>
    </div>
</section>
