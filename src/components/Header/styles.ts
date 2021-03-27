import styled from "styled-components"

export const Container = styled.header`
   background: var(--blue);
`;

export const Content = styled.div`
   max-width: 1120px;
   margin: 0 auto;
   display: flex;
   align-items: center;
   justify-content: space-between;

   padding: 2rem 1rem 12rem;

   button {
      font-size: 1rem;
      color: #FFFFFF;
      background: var(--blue-light);
      border: 0;
      padding: 0 2rem;
      height: 3rem;
      border-radius: 0.25rem;
      
      transition: filter 0.2s;

      &:hover {
         filter: brightness(0.9)
      }
   }
`;