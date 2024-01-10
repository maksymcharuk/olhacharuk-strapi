module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME", undefined),
        api_key: env("CLOUDINARY_KEY", undefined),
        api_secret: env("CLOUDINARY_SECRET", undefined),
      },
      actionOptions: {
        upload: {
          folder: "olhacharuk",
        },
        uploadStream: {},
        delete: {},
      },
    },
  },
});
