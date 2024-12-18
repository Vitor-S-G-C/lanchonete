import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  // Estado com valor inicial baseado em localStorage ou um valor inicial fornecido
  const [value, setValue] = useState<T>(() => {
    // Tenta obter o valor do localStorage
    const jsonValue = localStorage.getItem(key);
    // Se encontrar, retorna o valor JSON parseado
    if (jsonValue != null) return JSON.parse(jsonValue);

    // Se o valor inicial for uma função, chama-a para obter o valor inicial
    if (typeof initialValue === "function") {
      return (initialValue as () => T)();
    } else {
      return initialValue;
    }
  });

  // Quando o estado `value` mudar, atualiza o localStorage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]); // Atualiza o localStorage somente se o `key` ou `value` mudar

  // Retorna o valor atual e uma função para alterar o estado
  return [value, setValue] as [typeof value, typeof setValue];
}
