"use client";

import Button from "@/app/components/Button";
import { BandSchema } from "@/app/schemas/band.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Dispatch, SetStateAction } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";

interface Props {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

type BandFormData = z.infer<typeof BandSchema>;

export default function Create({ setIsOpen }: Props) {
  const { register, handleSubmit, formState } = useForm<BandFormData>({
    resolver: zodResolver(BandSchema),
    defaultValues: {
      status: "active",
    }
  });

  const onSubmit: SubmitHandler<BandFormData> = (data) => {
    console.log("Dados válidos, podemos enviar o formulário: ", data);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-8 m-18 rounded shadow-lg w-full max-w-3xl relati ve">
        <button
          className="absolute top-4 right-8 text-gray-500 hover:text-gray-800 text-3xl font-bold hover:cursor-pointer h-8 w-8 font-size-2xl flex items-center justify-center"
          aria-label="Fechar"
          onClick={() => setIsOpen(false)}
        >
          &#x2715;
        </button>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Criar Banda
        </h2>
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <span className="font-semibold text-sm">Nome:</span>
            <input
              {...register("name")}
              type="text"
              className="w-full p-2 rounded border"
              placeholder="Ex: Legião Urbana"
            />
            {formState?.errors?.name && (
              <p className="text-red-500 text-sm">
                {formState.errors.name.message}
              </p>
            )}
          </div>

          <div>
            <span className="font-semibold text-sm">Slug:</span>
            <input
              {...register("slug")}
              type="text"
              id="slug"
              className="w-full p-2 rounded border"
              placeholder="Ex: legiao-urbana"
            />
            {formState?.errors?.slug && (
              <p className="text-red-500 text-sm">
                {formState.errors.slug.message}
              </p>
            )}
          </div>

          <div>
            <span className="font-semibold text-sm">Descrição:</span>
            <textarea
              {...register("description")}
              id="description"
              className="w-full p-2 rounded border block"
              placeholder="Ex: Banda de rock brasileira"
            />
            {formState?.errors?.description && (
              <p className="text-red-500 text-sm">
                {formState.errors.description.message}
              </p>
            )}
          </div>

          <div>
            <span className="font-semibold text-sm">Capa:</span>
            <input
              {...register("cover")}
              type="file"
              accept=".png,.jpg,.jpeg"
              id="cover"
              className="w-full rounded border file:bg-gray-200"
            />
            {formState?.errors?.cover && (
              <p className="text-red-500 text-sm">
                {String(formState.errors.cover.message)}
              </p>
            )}
          </div>
          <div className="flex justify-end p-2">
            <Button type="submit">Criar Banda</Button>
          </div>
        </form>
      </div>
    </div>
  );
}