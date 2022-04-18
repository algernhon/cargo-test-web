import Container from "../containers"

export default function Home() {
  return (
    <Container.Layout>
      <Container.Header />
      <Container.Products />
      <Container.SearchStore />
      <Container.Footer />
    </Container.Layout>
  )
}
