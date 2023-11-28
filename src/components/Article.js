
function Article(arr) {  
  const { title, date, preview, minutes } = arr //destructuring

  return (
    <article>
      <h3>{title}</h3>
      <small>{date ? date : "January 1, 1970"}</small>
      <p>{preview}</p>
      <small>{minutes}</small>
    </article>
  );
}

export default Article;