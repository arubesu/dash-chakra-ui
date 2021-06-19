import { useRouter } from "next/dist/client/router";
import Link, { LinkProps } from "next/link";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  matchExactHref?: boolean;
}
export function ActiveLink({
  children,
  matchExactHref = false,
  ...rest
}: ActiveLinkProps) {

  let isActive = false;

  const { asPath } = useRouter();

  if ((matchExactHref && rest.href === asPath) ||
    !matchExactHref && asPath.startsWith(String(rest.href))
  ) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {
        cloneElement(children, {
          color: isActive ? 'pink.400' : 'gray.50'
        })
      }
    </Link>
  )
}