import React from 'react'

const BookDetail = ({ele}) => {
    console.log(ele);
    const { publisher, publishedDate, title, description } = ele.volumeInfo;
    const { thumbnail } = ele?.volumeInfo?.imageLinks || "";
    return (
    <li>
        <img
            src={thumbnail}
            alt={`Image unavailable for ${title}`}
        />
        <aside className="booklist-display--aside">
            <h2>
                {title}
            </h2>
            {publisher !== undefined &&                             
                <p className="booklist__book--publisher">
                    <b>Publisher: &nbsp;</b>{publisher}
                </p>}
            {publishedDate !== undefined &&                             
                <p className="booklist__book--publishedDate">
                    <b>Publish Date: &nbsp;</b>{publishedDate}
                </p>}
            {description !== undefined &&
                <p className="booklist__book--description">
                    <b>Description: &nbsp;</b>{description}
                </p>
            }
        </aside>
    </li>
  )
}

export default BookDetail;
