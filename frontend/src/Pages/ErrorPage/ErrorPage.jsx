
function ErrorPage() {
  return (
    <div id="error-page" style={{height: '50vh', display: 'flex',
      flexDirection: 'column', justifyContent: 'center'}}>
      <h1 style={{textAlign: "center", fontSize: '200px'}}>
        404!
      </h1>
      <h2 style={{textAlign: "center"}}>
        Sorry, this page doesn't exist :(
      </h2>
    </div>
  );
}

export default ErrorPage
