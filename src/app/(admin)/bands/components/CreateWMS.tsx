import Button from "@/app/components/Button";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

interface Props {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

interface formErrors {
  name: null | string;
  slug: null | string;
  description: null | string;
  cover: null | string;
}

export default function Create({ setIsOpen }: Props) {
  const [name, setName] = useState<string>("");
  const [slug, setSlug] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [cover, setCover] = useState<FileList | null>(null);
  const [errors, setErrors] = useState<formErrors | undefined>(undefined);

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateForm();
    //TODO enviar para API
  };

  const validateForm = () => {
    let formIsValid: boolean = true;

    const validateErrors: formErrors = {
      name: null,
      slug: null,
      description: null,
      cover: null,
    };

    if (!name.trim()) {
      validateErrors.name = "O nome é obrigatório.";
      formIsValid = false;
    }

    if (name.length < 3) {
      validateErrors.name =
        "O nome da banda está incorreto (menos de 3 caracteres).";
      formIsValid = false;
    }

    if (!slug.trim()) {
      validateErrors.slug = "O slug é obrigatório.";
      formIsValid = false;
    }

    if (!description.trim()) {
      validateErrors.description = "A descrição é obrigatória.";
      formIsValid = false;
    }

    if (!cover) {
      validateErrors.cover = "A capa é obrigatória.";
      formIsValid = false;
    } else {
      if (
        !["image/png", "jimage/jpg", "image/jpeg"].includes(cover?.[0].type)
      ) {
        validateErrors.cover = "A capa deve ter a extensão png, jpeg ou jpg";
        formIsValid = false;
      }
    }

    console.log();

    setErrors(validateErrors);
    return formIsValid;
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-8 m-18 rounded shadow-lg w-full max-w-3x1 relative">
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
        <form onSubmit={handleSubmit} action="" className="flex flex-col">
          <div>
            <span className="font-semibold text-sm">Nome:</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              id="name"
              className="w-full p-2 rounded border"
              placeholder="Ex: Legião Urbana"
            />
            {errors?.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}

            <span className="font-semibold text-sm">Slug:</span>
            <input
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              type="text"
              name="slug"
              id="slug"
              className="w-full p-2 rounded border"
              placeholder="Ex: legiao-urbana"
            />
            {errors?.slug && (
              <p className="text-red-500 text-sm">{errors.slug}</p>
            )}

            <span className="font-semibold text-sm">Descrição:</span>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              name="description"
              id="description"
              className="w-full p-2 rounded border block"
              placeholder="Ex: Banda de rock brasileira"
            />
            {errors?.description && (
              <p className="text-red-500 text-sm">{errors.description}</p>
            )}

            <span className="font-semibold text-sm">Capa:</span>
            <input
              onChange={(e) => setCover(e.target.files)}
              type="file"
              accept=".png,.jpg,.jpeg"
              name="cover"
              id="cover"
              className="w-full rounded border file:bg-gray-200"
            ></input>
            {errors?.cover && (
              <p className="text-red-500 text-sm">{errors.cover}</p>
            )}
          </div>
          <div className="flex justify-end p-2">
            <Button>Criar Banda</Button>
          </div>
        </form>
      </div>
    </div>  
  );
}
