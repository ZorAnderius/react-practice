import { Article } from "../Article/Article"

export const ArticleList = ({articles}) => {
  return (
      <ul>
          {
              articles.map(({ orderId, ...rest }) => (
                  <li key={orderId}>
                      <Article data={ rest} />
                  </li>
              ))
          }
      </ul>
  )
}
