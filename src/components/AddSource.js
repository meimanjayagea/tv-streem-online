import React, { useRef, useState } from 'react';
import { PlusIcon, XIcon } from '@heroicons/react/outline';
import { getStreamType } from '../channels';

export default function AddSource({ onAdd }) {
  const dialogRef = useRef(null);
  const [error, setError] = useState('');

  function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = data.get('name').trim();
    const source = data.get('source').trim();
    try {
      const url = new URL(source);
      if (
        !name ||
        !['http:', 'https:'].includes(url.protocol) ||
        url.username ||
        url.password ||
        !getStreamType(source)
      ) {
        setError('Masukkan nama dan URL HTTP(S) dengan format .m3u8 atau .mp4.');
        return;
      }
    } catch {
      setError('Masukkan URL video yang valid.');
      return;
    }
    dialogRef.current.close();
    form.reset();
    onAdd({ name, source });
  }

  return (
    <>
      <button
        type="button"
        className="button button-secondary"
        onClick={() => {
          setError('');
          dialogRef.current.showModal();
        }}>
        <PlusIcon /> Tambah sumber
      </button>
      <dialog ref={dialogRef} className="source-dialog" aria-labelledby="source-title">
        <div className="section-heading">
          <h2 id="source-title">Tambah sumber</h2>
          <button
            type="button"
            className="icon-button"
            aria-label="Tutup"
            onClick={() => dialogRef.current.close()}>
            <XIcon />
          </button>
        </div>
        <p>Sumber disimpan di browser ini. Gunakan URL MP4 atau HLS yang boleh Anda akses.</p>
        <form onSubmit={submit}>
          <label>
            Nama kanal
            <input name="name" required maxLength={60} placeholder="Contoh: Kanal kampus" />
          </label>
          <label>
            URL video
            <input name="source" type="url" required placeholder="https://…/live.m3u8" />
          </label>
          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}
          <button className="button button-primary" type="submit">
            Simpan dan buka
          </button>
        </form>
      </dialog>
    </>
  );
}
