import parse from "html-react-parser"
import React from "react"

import userLogo from "../../images/user.png"
import useProducts from "../../hooks/products"

const HierarchyComments = ({ id }) => {
  const URL_COMMENTS = `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  const [item] = useProducts(URL_COMMENTS)

  const kids = item?.kids

  return (
    <>
      {item && (
        <div className="about__container">
          <div className="about__comment">
            <div className="about__type">
              <img src={userLogo} alt="" width={30} className="about__logo" />
              <span className="about__desc">{item.by}</span>
            </div>
            <p className="about__type">
              Comment:
              <span className="about__desc">
                {item ? parse(String(item.text)) : ""}
              </span>
            </p>
          </div>
          {kids && kids.map((comment) => <HierarchyComments id={comment} />)}
        </div>
      )}
    </>
  )
}

export default HierarchyComments
