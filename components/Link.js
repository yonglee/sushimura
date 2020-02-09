import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default ({ href, children }) => {
  const router = useRouter();
  let className = children.props.className || "";

  if (router.pathname === href) {
    className = `${className} selected`;
  } else if (
    router.pathname.includes("/menus") &&
    router.pathname !== "/" &&
    href === "/menu"
  ) {
    className = `${className} selected`;
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
};
// export default ({ href, children }) => {
//   const router = useRouter();
//   console.log(router.pathname, href);
//   let className = children.props.className || "";
//   if (router.pathname === href) {
//     className = `${className} selected`;
//   }

//   return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
// };
