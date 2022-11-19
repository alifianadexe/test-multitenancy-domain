export default async function getData() {
  const test = await fetch("http://localhost:8080/pegawai");
  const posts = await test.json();
  console.log(posts);
}
