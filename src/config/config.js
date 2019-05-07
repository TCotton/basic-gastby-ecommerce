const config = {
  bucket_name: process.env.GATSBY_APP_BUCKET_SLUG || "GastbyJS Ecommerce",
  bucket_slug:
    process.env.GATSBY_APP_BUCKET_SLUG ||
    "2d8ac6f0-70b2-11e9-921d-2d0ea35ed090",
  bucket_id: process.env.GATSBY_APP_BUCKET_ID || "5cd15caad1e0ce2fe36c79b2",
  read_key:
    process.env.GATSBY_APP_BUCKET_READ_KEY ||
    "TlDajsgOV4PlAtt9NMnKkCltOddlvwfZ8S8KzlGMBSv975yzeQ",
  write_key:
    process.env.GATSBY_APP_BUCKET_WRITE_KEY ||
    "LrLCDT4pSSkQOVQL43DVIRyRx3POS44BA0ZPS9bIeNsS8WLLtJ",
  url: "https://api.cosmicjs.com/v1/",
}
export default config
