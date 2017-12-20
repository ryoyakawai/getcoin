importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "coin.css",
    "revision": "50717a84d6e367e4f08ac172945a3892"
  },
  {
    "url": "coin.js",
    "revision": "aed0df59696b46148080cd379d320460"
  },
  {
    "url": "coinicon_144x144.png",
    "revision": "3edc5d3a4321edce9a67bd5fab48f079"
  },
  {
    "url": "coinicon_200x200.png",
    "revision": "de2f6354cc4cf6943d8bc2557cab3dd6"
  },
  {
    "url": "index.html",
    "revision": "0cf5edd8967448b09d44c2e744c98f7c"
  },
  {
    "url": "main.css",
    "revision": "0cbc865c7c504e0117b0c77b8613e8a6"
  },
  {
    "url": "manifest.json",
    "revision": "cc04baae268df20734344d542b7bdfb6"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
