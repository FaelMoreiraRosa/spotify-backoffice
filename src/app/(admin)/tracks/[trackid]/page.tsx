/*interface Props {
  params: {
    trackid: string;
  }
}
export default async function Page({params} : Props) {
  const p = await params
  return (
      <h1>Musica id {p.trackid}</h1>
  );
}*/
interface Props {
  params: {
    trackid: string;
  };
  searchParams: {
    mode: string;
    showTitle: string;
    anotherParam: string;
  };
}

export default async function Page({ params, searchParams }: Props) {
  const p = await params;
  const trackid = p.trackid;
  const sP = await searchParams;
  const mode = sP.mode;
  const showTitle = sP.showTitle;
  const anotherParam = sP.anotherParam;
  return (
    <>
      <h1>Musica ID: {trackid}</h1>
      <h2>Mode: {mode}</h2>
      <h2>Show: Title: {showTitle}</h2>
      <h2>Another Param: {anotherParam}</h2>
    </>
  );
}
