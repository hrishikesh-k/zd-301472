export default function(props: {
  params: {
    slug: string
  }
}) {
  return (
    <h1>{props.params.slug}</h1>
  )
}