import Container from "@/components/layout/Container";
import AppBreadcrumbs from "@/components/ui/breadcrumbs";
import { Button, Divider, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddIcon from "@mui/icons-material/Add";
import PrintIcon from "@mui/icons-material/Print";
import { REVALIDATE_CACHE_LONG } from "@/constants";

export const revalidate = REVALIDATE_CACHE_LONG;

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true; // or false, to 404 on unknown paths

export async function generateStaticParams() {
  // TODO: Replace this with your own data fetching
  //   const response = await useGetAllTagSlugsQuery.fetcher({})()
  //   return (
  //     response.tagCollection?.items.map((item) => ({
  //       slug: slugify(item?.name || ''),
  //     })) || []
  //   )
}

export default async function RecipesPage({
  params,
}: {
  params: { slug: string };
}) {
  // TODO: Replace this with your own data fetching
  //   const slug = (await params).slug;
  //   const post = await fetch(`https://api.vercel.app/blog/${id}`).then(
  //     (res) => res.json()
  //   );

  return (
    <Container className="py-10">
      <Grid2 container spacing={2}>
        <Grid2 size={6} display="flex" flexDirection="column">
          <AppBreadcrumbs />
          <Typography
            variant="h1"
            sx={{
              my: 2,
            }}
          >
            Whole Grain Banana Bread
          </Typography>

          <Typography
            variant="body1"
            sx={{
              my: 2,
            }}
          >
            This one-bowl banana bread — our 2018 Recipe of the Year — uses the
            simplest ingredients, but is incredibly moist and flavorful. While
            the recipe calls for a 50/50 mix of flours (all-purpose and whole
            wheat), we often make the bread 100% whole wheat, and honestly? No
            one can tell, it&apos;s that good! And not only is this bread
            delicious — it&apos;s versatile.
          </Typography>

          <Grid2 container spacing={2}>
            <Grid2 size={4} className="flex gap-2">
              <AccessTimeIcon fontSize="large" />
              <div className="flex flex-col">
                <Typography variant="body1" fontWeight={600} fontSize={12}>
                  PREP
                </Typography>
                <Typography variant="body2" fontSize={18}>
                  15 mins
                </Typography>
              </div>
            </Grid2>
            <Grid2 size={4}>
              <Typography variant="body1" fontWeight={600} fontSize={12}>
                BAKE
              </Typography>
              <Typography variant="body2" fontSize={18}>
                1 hr to 1 hr 15 mins
              </Typography>
            </Grid2>
            <Grid2 size={4}>
              <Typography variant="body1" fontWeight={600} fontSize={12}>
                TOTAL
              </Typography>
              <Typography variant="body2" fontSize={18}>
                1hr 20 mins
              </Typography>
            </Grid2>
          </Grid2>

          <Divider
            sx={{
              my: 2,
            }}
          />
          <Grid2 container spacing={2}>
            <Grid2 size={4} className="flex gap-2">
              <AccessTimeIcon fontSize="large" />
              <div className="flex flex-col">
                <Typography variant="body1" fontWeight={600} fontSize={12}>
                  YIELD
                </Typography>
                <Typography variant="body2" fontSize={18}>
                  1 loaf, 12 generous servings
                </Typography>
              </div>
            </Grid2>
            <Grid2>
              <Button variant="text" startIcon={<AddIcon />} color="secondary">
                <Typography fontWeight={500}> Save Recipe</Typography>
              </Button>
            </Grid2>
            <Grid2>
              <Button
                variant="text"
                startIcon={<PrintIcon />}
                color="secondary"
              >
                <Typography fontWeight={500}> Print</Typography>
              </Button>
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 size={6}>
          <div className="flex justify-center max-w-full">
            <Image
              src={
                "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image_2x/public/2022-09/whole-grain-banana-bread-3_0822.jpg?itok=XSvVPGg3"
              }
              alt="Whole Grain Banana Bread"
              width={600}
              height={400}
              className="object-cover object-center max-w-full"
            />
          </div>
        </Grid2>
      </Grid2>
    </Container>
  );
}
