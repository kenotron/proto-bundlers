# Redirecting Bundler

This idea came from the begin.com slide here: https://slides.begin.com/jamstack19/#slide=1

It basically contained a VERY rudimentary version of a service much like what Cloudpack aspires to be. Let's describe what it does:

As implemented, it is NOT using the typical bundler, Webpack. Rather, it takes advantage of the modern browser support for loading native ES modules. This led down the path towards using Rollup. To codify the logic needed for the redirects and bundling, the Express server is chosen. The workflow looks like this:

1. when the index.html is requested, the query param "dev" is evaluated to tell the server whether to bundle or to just serve files out as individual es modules.
   - in dev mode, this is all that is needed; files are not cached so each reload will cause all files to be downloaded.
2. in a bundling mode (prod?), the entry .js GET request triggers a rollup() call
   - this is async and there's a fake slow down here of about a second to simulate what it could feel like
3. after the file has been bundled, it is then saved in a cache folder, a 302 redirect is returned to the client to load from that cache directory
   - to truly optimize further access, we should really keep track of the hashes of the input files to make sure we don't over rebundle
4. when the cache is being accessed, it will add max-age to a day

This is meant to be _inspirational_, not prescriptive. The developer simply hits a shift-refresh to force a rebundling to happen here.

## Areas of Improvement

1. Using ESM provides a shortcut to get rid of having to parse and generate code to load subsequent scripts - a more realistic picture should include a solution involving Webpack (perhaps we need to improve its support for ESM)

2. Rollup here is totally NOT configured at all. Like Snowpack, we can come up with a rather sane default of having a separate .js generated per external dependency + some heuristic for internal packages

3. http/2 is not turned on for the study, but it is practically _required_ to make this a fast enough experience

4. From some studies, there's data to suggest that PLT won't be affect until after 50 .js file loads with http/2 - how can we make sure we cap at that in a PLT scenario?

5. We should test out the combination of this and import-maps in place of having ALL loose modules especially when the app grows to be a moderate sized repo

6. How should this thing support internal packages in a monorepo?
