import type { PropsWithChildren } from "react";

export default function(props : PropsWithChildren) {
  return (
    <html>
      <body>{props.children}</body>
    </html>
  )
}