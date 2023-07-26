import styled from "styled-components"

export const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: contain;
  margin-bottom: 16px;
`

export const Brand = styled.p`
  font-weight: bold;
  margin-bottom: 8px;
`

export const Model = styled.p`
  margin-bottom: 8px;
`

export const Size = styled.p`
  margin-bottom: 8px;
`

export const Price = styled.p`
  font-weight: bold;
`
// export const AddToFavoritesButton = styled.button`
// background-color: #4CAF50;
// color: white;
// padding: 10px 15px;
// border: none;
// cursor: pointer;
// margin-top: 10px;
// `;

// export const ModalContainer = styled.div`
// position: fixed;
// top: 0;
// left: 0;
// width: 100%;
// height: 100%;
// background-color: rgba(0, 0, 0, 0.5);
// display: flex;
// justify-content: center;
// align-items: center;
// z-index: 999;
// `;

// export const ModalContent = styled.div`
// background-color: #fff;
// padding: 20px;
// border-radius: 5px;
// box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
// `;

// export const CancelButton = styled.button`
// background-color: #f44336;
// color: white;
// padding: 10px 15px;
// border: none;
// cursor: pointer;
// margin-right: 10px;
// `;

// export const ConfirmButton = styled.button`
// background-color: #4CAF50;
// color: white;
// padding: 10px 15px;
// border: none;
// cursor: pointer;
// `;