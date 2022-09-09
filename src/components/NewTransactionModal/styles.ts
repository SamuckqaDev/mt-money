import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-block-end: 2rem;
  }

  input {
    inline-size: 100%;
    padding: 1.5rem;
    block-size: 4rem;
    border-radius: 0.25rem;

    border: 1px solid var(--input-border);
    background: var(--input-background);

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-title);
    }

    & + input {
      margin-block-start: 1rem;
    }
  }

  button[type="submit"] {
    inline-size: 100%;
    padding: 0 1.5rem;
    block-size: 4rem;
    background: var(--green);
    border: 0;
    border-radius: 0.25rem;
    font-size: 1rem;
    margin-block-start: 1.5rem;
    color: #fff;
    font-weight: 600;

    transition: 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
