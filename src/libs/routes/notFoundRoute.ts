export default function notFoundRoutes( req,res,next ) {
  console.log(" inside not found Route");
  next ({ error: "notFound", statusCode: 404 });
}
