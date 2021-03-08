import { Link as CLink, PropsOf } from "@chakra-ui/react";
import NLink from "next/link";
import React from "react";

type LinkProps = PropsOf<typeof CLink> & PropsOf<typeof NLink>;

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, scroll, children, ...restProps }, ref) => {
    return (
      <NLink scroll={scroll} href={href} passHref>
        <CLink {...restProps} ref={ref}>
          {children}
        </CLink>
      </NLink>
    );
  }
);
