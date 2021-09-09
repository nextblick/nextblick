import React from "react"
import styled from "@emotion/styled"

export const PostsFilter = ({
  categories,
  activeCategory,
  handleCategoryToggle,
}) => {
  return (
    <PoststFilterWrapper>
      <ul>
        {categories.map(({ name, slug }) => (
          <li>
            <a
              onClick={() => handleCategoryToggle(slug)}
              href={`?category=${slug}`}
              class={slug === activeCategory ? "active" : null}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </PoststFilterWrapper>
  )
}

const PoststFilterWrapper = styled.div`
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 3rem;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      gap: 3rem;
    }
  }

  ul li {
    flex: 0 1 auto;
  }

  ul li a {
    display: block;
    font-size: 2rem;
    opacity: 0.5;

    &.active {
      font-weight: 400;
      opacity: 1;
    }
  }
`
