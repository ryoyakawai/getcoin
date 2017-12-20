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
    "url": "index.html",
    "revision": "54df2c721a79e0e8525ca0730a5f8545"
  },
  {
    "url": "main.css",
    "revision": "aa10b2efba9922612d5d78e6db351cc6"
  },
  {
    "url": "manifest.json",
    "revision": "cc04baae268df20734344d542b7bdfb6"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
