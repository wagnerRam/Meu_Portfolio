
"use client";

import { useState } from "react";

interface ProjectPreviewProps {
  name: string;
  url: string;
  image: string;
}

export default function ProjectPreview({
  name,
  url,
  image,
}: ProjectPreviewProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="project-image-button"
        onClick={() => setIsOpen(true)}
        aria-label={`Visualizar ${name}`}
      >
        <img src={image} alt={`Prévia do site ${name}`} />
        <span className="project-image-overlay">
          Explorar projeto ↗
        </span>
      </button>

      {isOpen && (
        <div
          className="project-modal"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="project-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="project-modal-header">
              <h2>{name}</h2>

              <div className="project-modal-actions">
                <a href={url} target="_blank" rel="noreferrer">
                  Abrir em nova aba ↗
                </a>

                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Fechar visualização"
                >
                  ✕
                </button>
              </div>
            </div>

            <iframe
              src={url}
              title={`Prévia do projeto ${name}`}
              className="project-iframe"
            />
          </div>
        </div>
      )}
    </>
  );
}
