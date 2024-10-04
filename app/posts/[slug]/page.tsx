export default async function(props: {
  params: {
    slug: string
  }
}) {
  const data = await fetch('https://api.vercel.app/blog', {
    next: {
      tags: [
        'posts'
      ]
    }
  })
  const posts = await data.json()
  return (
    <>
      <h1>{props.params.slug}</h1>
      <ul>
        {posts.map(p => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </>
  )
}