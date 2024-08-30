export default function Caixa(props: any) {
  return (
    <div
      className={`
            flex justify-center items-center text-2xl
            bg-purple-400 m-2 rounded-md p-2 w-96 h-64
        `}
    >
      {props.children}
    </div>
  );
}
