import React, { useState } from "react";
import { useFormik } from "formik";
import useMarvelService from "../services/marvelService"; // Adjust the path if needed

export default function CharacterSearch() {
  const [characters, setCharacters] = useState([]);
  

  const { getCharactersByName,loading } = useMarvelService();

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: async (values) => {
      loading(true);
      try {
        const data = await getCharactersByName(values.name);
        setCharacters(data.results);
      } catch (error) {
        console.error("❌ Error fetching characters", error);
      } finally {
        loading(false);
      }
    },
  });

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
      <h2>🔍 Search superheros (Marvel)</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder="example... Iron"
          style={{ padding: 8, width: "100%", marginBottom: 10 }}
        />
        <button type="submit" style={{ padding: 8, width: "100%" }}>
          Փնտրել
        </button>
      </form>

      {loading && <p>Loading...</p>}

      <div style={{ marginTop: 20 }}>
        {characters.length > 0 &&
          characters.map((char) => (
            <div
              key={char.id}
              style={{
                marginBottom: 20,
                border: "1px solid #ccc",
                borderRadius: 10,
                padding: 10,
              }}
            >
              <h3>{char.name}</h3>
              <img
                src={`${char.thumbnail.path}/standard_medium.${char.thumbnail.extension}`}
                alt={char.name}
                style={{ width: 100, height: 100 }}
              />
              <p>📚 Կոմիքսների քանակ: {char.comics.available}</p>
              {char.description && <p>📝 description: {char.description}</p>}
            </div>
          ))}
      </div>
    </div>
  );
}
