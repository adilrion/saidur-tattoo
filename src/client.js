import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "2omp863o", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
});

