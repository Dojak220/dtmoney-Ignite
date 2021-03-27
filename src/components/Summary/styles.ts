import styled from "styled-components"

export const Container = styled.section`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 2rem;
   margin-top: -7rem;

   div {
      background: var(--shape);
      display: block;
      padding: 1.5rem 2rem;
      border-radius: 0.25rem;
      color: var(--text-title);

      header { 
         display: flex;
         align-items: center;
         justify-content: space-between;

         p { 
            margin: 1rem 0;
         }
      }

      strong {
         font-size: 2rem;
         font-weight: 500;
         line-height: 3rem;
      }

      :last-child {
         background: var(--green);
         color: #FFFFFF;
      }
   }
`;