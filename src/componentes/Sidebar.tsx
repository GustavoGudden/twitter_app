import { useEffect, useState } from "react";
import { format } from "date-fns";
import ptbr from "date-fns/locale/pt-BR";

export function Sidebar() {
  const [api, setapi] = useState([]);

  useEffect(() => {
    fetch("http://localhost:21262/")
      .then((Response) => Response.json())
      .then((data) => setapi(data.response));
  }, []);

  return (
    <aside className="w-[40%]  pr-6 pl-9 p-2">
      <div className="w-[80%]">
        <input
          className="bg-gray-300 h-10 rounded-[25px] w-full pl-3 placeholder:text-black"
          type="text"
          placeholder="Buscar No Twitter"
        />
      </div>
      <div className="flex flex-col gap-8 bg-gray-300 mt-5 p-4 rounded-[14px] w-[80%]">
        <h1>Oque esta acontecendo?</h1>

        {api.map((api) => {
          if (api.destaque === "Y") {
            return (
              <div className="flex flex-col justify-start mb-6">
                <div>{api.local}* data</div>
                <div>{api.slug}</div>
                <div>assunto do momento</div>
              </div>
            );
          }
        })}

        <p className="text-blue-400">Mostrar mais..</p>
      </div>
    </aside>
  );
}
