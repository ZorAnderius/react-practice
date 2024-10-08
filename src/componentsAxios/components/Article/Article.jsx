export const Article = ({ data: { url, title } }) => {
  return (
      <>
        <a href={url}
            target='_blank'
            rel="noreferrer noopener">
            {title}
        </a>
      </>
  )
}
