import Caixa from "@/components/basicos/Caixa";

export default function PaginaCaixa() {
  return (
      <div className="flex justify-center items-center">
        <Caixa>3</Caixa>
        <Caixa>2</Caixa>
        <Caixa>
          <ul className="list-disc">
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </Caixa>
      </div>
  );
}
