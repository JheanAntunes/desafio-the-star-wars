type TypePaginationLogicProps = {
  totalData: number
  quantityPerPage: number
}

const PaginationLogic = ({
  quantityPerPage,
  totalData
}: TypePaginationLogicProps) => {
  //resultado: 9 , passo 02:Math.ceil(8.2) === 9 , passo 01: 82 / 10 === 8.2
  const calcPagination = Math.ceil(totalData / quantityPerPage)
  // [0,1,2,3,8], lenght: 9
  const pagination = Array.from({ length: calcPagination }).map(
    (_, index) => index
  )
  return {
    pagination
  }
}

export default PaginationLogic
