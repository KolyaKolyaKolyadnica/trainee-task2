// declare module "*.module.css";
//     declare module "*.module.scss";

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.jpg" {
  const value: any;
  export = value;
}
