'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { ModalAlert } from '@/components/Alert';
import TabelaInsercao from '@/components/tabelaInsercao';
import { Button } from '@/components/ui/button';

import { useCreateParam, useDeleteParam } from '@/hooks';
import { plscale } from '@/lib/api';
import { st_cliente, st_empresa, st_produto } from '@/types/dados/dados';

type SaidaFormProps = {
  empresas: st_empresa[]
  clientes: st_cliente
  produtos: st_produto[]
  data: string
  defaultValue: number
}

export const SaidaForm = ({ empresas, clientes, produtos, data, defaultValue }:SaidaFormProps) => {
  const [itens, setItens] = useState([]);
  const [message, setMessage] = useState<string[]>([]);
  const [empresa,setEmpresa] = useState('');
  const urlSemEmpresa = useDeleteParam(['ID_EMPRESA']);
  const router = useRouter();
  const pushEmpresa = useCreateParam('ID_EMPRESA',empresa);
  const montarTabela = (e) => {
    e.preventDefault();
    let existente = false;
    const dadosForm: object = {};
    const formulario = new FormData(e.target);
    for (const [key, value] of formulario) {
      dadosForm[key] = value;
    }
    itens.forEach((valores) => {
      if (valores['ID_PRODUTO'] === dadosForm['ID_PRODUTO'].toString()) {
        existente = true;
      }
    });
    const pdt = produtos.filter((produto) => {
      if (produto.ID_PRODUTO === Number(dadosForm.ID_PRODUTO)) {
        return produto;
      }
    } );
    if (!existente) {
      if (dadosForm.N_QUANTIDADE <= 0) {
        setMessage(['Valor deve ser maior que 0 !']);
        setTimeout(() => {
          setMessage([]);
        }, 2000);
        return;
      }
      if (pdt[0].QUANTIDADE < Number(dadosForm.N_QUANTIDADE) ) {
        setMessage(['Erro !','Quantidade atual no estoque é: ',`${pdt[0].QUANTIDADE}`]);
        setTimeout(() => {
          setMessage([]);
        }, 2000);
        return;
      }
      setItens((prevstate) => [...prevstate, dadosForm]);
      e.target.reset();
    } else {
      alert('Produto já inserido na lista!');
    }
  };
  const cancelar = (e) => {
    e.preventDefault();
      setItens([]);
      router.push(urlSemEmpresa);
      router.refresh();
  };
  const excluirItem = (index: number) => {
    setItens(itens.filter((item) => item !== itens[index]));
  };
  const handleEmpresa = (e) => {
    setEmpresa(e.target.value);
  };
  useEffect(()=>{
    if (empresa !== '' ) {
      router.push(pushEmpresa);
    }
  },[empresa,pushEmpresa,router]);
  const realizarEntrada = async (e) => {
    e.preventDefault();
    const confirmacao = window.confirm(`Confirma a saida dos itens?`);
    if (confirmacao) {
      const cliente = document.getElementById('ID_CLIENTE').value;
      if (!cliente || !defaultValue) {
        setMessage(['Para finalizar, deixe um cliente e empresa selecionado !']);
        setTimeout(() => {
          setMessage([]);
        }, 3000);
        return;
      }
      await plscale
        .post('/st_produto_lote', {
          ID_CLIENTE: Number(cliente),
          DADOS: itens
        })
        .then((res) => {
          setMessage([res.data.message]);
          setItens([]);
          setTimeout(() => {
            setMessage([]);
          }, 3000);
        })
        .catch((error) => alert(error));
    }
  };
  return (
    <>
      {message.length > 0 && <ModalAlert message={message} />}
      <fieldset
        className="m-auto p-5 w-full max-w-xl border-2 border-blue7 dark:border-blue1 shadow-lg rounded-lg"
        id="formEntrada"
      >
        <legend>Saida de Mercadoria</legend>
        <form onSubmit={montarTabela}>
          <div>
            <label htmlFor="ID_EMPRESA" className="inline-block w-1/3 p-1">
              Empresa:{' '}
            </label>
            <select
              name="ID_EMPRESA"
              defaultValue={defaultValue}
              id="ID_EMPRESA"
              onChange={ (e)=>{
                handleEmpresa(e);
              }}
              className="w-2/3 p-1 rounded-sm dark:text-blue1 dark:bg-gray-700 border-2 border-blue7"
            >
              <option value="" defaultValue="">
                Selecione uma Empresa
              </option>
              {empresas
                ? empresas?.map((empresa) => {
                    return (
                      <option key={empresa.ID_EMPRESA} value={empresa.ID_EMPRESA}>{empresa.S_NOME}</option>
                    );
                  })
                : ''}
            </select>
          </div>
          {clientes?.length > 0 && (
            <div>
              <label htmlFor="ID_CLIENTE" className="inline-block w-1/3 p-1">
                Cliente:{' '}
              </label>
              <select
                name="ID_CLIENTE"
                id="ID_CLIENTE"
                defaultValue={''}
                className="w-2/3 p-1 rounded-sm dark:text-blue1 dark:bg-gray-700 border-2 border-blue7"
              >
                <option value="">
                  Selecione um Cliente
                </option>
                {clientes?.map((cliente) => {
                    return (
                      <option
                        key={cliente.ID_CLIENTE}
                        value={cliente.ID_CLIENTE}
                      >
                        {cliente.S_NOME}
                      </option>
                    );
                  })}
              </select>
            </div>
          )}
          <div>
            <label htmlFor="ID_PRODUTO" className="inline-block w-1/3 p-1">
              Produto:
            </label>
            <select
              name="ID_PRODUTO"
              id="ID_PRODUTO"
              defaultValue={''}
              required
              className="w-2/3 p-1 rounded-sm dark:text-blue1 dark:bg-gray-700 border-2 border-blue7"
            >
              <option value="" disabled defaultValue="" hidden>
                Selecione um Produto
              </option>
              {produtos
                ? produtos?.map((produto) => {
                    return (
                      <option
                        key={produto.ID_PRODUTO}
                        value={produto.ID_PRODUTO}
                      >
                        {produto.PRODUTO}
                      </option>
                    );
                  })
                : ''}
            </select>
          </div>
          <div>
            <label className="inline-block w-1/3 p-1" htmlFor="S_DIMENSAO">
              Dimensões:
            </label>
            <input
              className="w-2/3 p-1 rounded-sm dark:text-blue1 dark:bg-gray-700 border-2 border-blue7"
              type="text"
              name="S_DIMENSAO"
            />
          </div>
          <div>
            <label className="inline-block w-1/3 p-1" htmlFor="S_DETALHES">
              Detalhes:
            </label>
            <input
              className="w-2/3 p-1 rounded-sm dark:text-blue1 dark:bg-gray-700 border-2 border-blue7"
              type="text"
              name="S_DETALHES"
            />
          </div>
          <div>
            <label className="inline-block w-1/3 p-1" htmlFor="N_VALOR">
              Valor:
            </label>
            <input
              className="w-2/3 p-1 rounded-sm dark:text-blue1 dark:bg-gray-700 border-2 border-blue7"
              type="number"
              name="N_VALOR"
            />
          </div>
          <div>
            <label className="inline-block w-1/3 p-1" htmlFor="N_QUANTIDADE">
              Quantidade:
            </label>
            <input
              className="w-2/3 p-1 rounded-sm dark:text-blue1 dark:bg-gray-700 border-2 border-blue7"
              type="number"
              name="N_QUANTIDADE"
              required
            />
          </div>
          <p className="text-gray-500 mt-1">Data: {data}</p>
          <div className="flex justify-between">
            <Button type="submit" id="Enviar" className="hover:bg-green-700">
              Incluir
            </Button>
            <Button onClick={cancelar} className="hover:bg-red-700">
              Cancelar
            </Button>
          </div>
        </form>
      </fieldset>
      <div className={`max-h-52 max-w-7xl p-1 m-auto overflow-auto`}>
        <TabelaInsercao content={itens} excluirItem={excluirItem} />
      </div>
      {itens[0] ? (
        <Button
          className="float-right hover:bg-green-700"
          type="submit"
          onClick={realizarEntrada}
        >
          Enviar
        </Button>
      ) : (
        ''
      )}
    </>
  );
};
export default SaidaForm;
