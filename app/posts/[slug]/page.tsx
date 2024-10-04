export default async function(props: {
  params: {
    slug: string
  }
}) {
  await fetch('https://www.netlify.com/', {
    next: {
      tags: ['posts']
    }
  })
  return (
    <h1>{props.params.slug}</h1>
  )
}