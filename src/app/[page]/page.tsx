export default function Page({ params }: { params: { page: string } }) {
  return <div>{params.page}</div>
}