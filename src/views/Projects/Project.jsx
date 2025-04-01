import { useParams } from 'react-router-dom'
import { useProject } from '../../hooks/useProjects'
import styles from './Project.module.css'
import { useEffect } from 'react'
import { setLoader } from '../../redux/loader.reducer'
import { useDispatch } from 'react-redux'
import { Divider, Stack } from '@mui/material'
import Button from '../../components/Button/Button'
import MovieTrailer from '../MoviesGallery/components/MovieTrailer'

const Project = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { project, loading, error } = useProject(id)

  useEffect(() => {
    dispatch(setLoader(loading))
  }, [loading, dispatch])

  if (loading) {
    return null
  }

  if (error) {
    return <p className={styles.error}>{error}</p>
  }

  if (!project) {
    return <p className={styles.error}>Project not found</p>
  }

  const renderField = (title, value, isLink = false) => {
    if (
      !value ||
      (Array.isArray(value) && value.length === 0)
    )
      return null

    return (
      <span>
        <p className={styles.subtitle}>{title}</p>
        {isLink ? (
          <a
            href={value}
            target="_blank"
            rel="noopener noreferrer"
          >
            {value}
          </a>
        ) : (
          <p>
            {Array.isArray(value)
              ? value.join(', ')
              : value}
          </p>
        )}
      </span>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>{project.name}</h1>

        <div className={styles.info__container}>
          <div className={styles.afiche}>
            <img
              alt="afiche"
              src={project.afiche?.url}
              onError={e => {
                e.target.src =
                  '/assets/img/img_coming_soon.jpg'
              }}
            />
          </div>

          <div className={styles.info}>
            {renderField(
              'Estado del proyecto | project status',
              project.currentSituation,
            )}
            {renderField(
              'Empresa productora | Producer company',
              project.productionCompany,
            )}
            {renderField(
              'Corproducción | Corpoducers',
              project.coproducers,
            )}
            {renderField(
              'Correo electrónico | Email',
              project.email,
            )}
            {renderField('Teléfono | Phone', project.phone)}
            {renderField(
              'Página web | Website',
              project.website,
              true,
            )}

            {project.dossier?.url && (
              <Button
                src={project.dossier.url}
                btnStyle="secondary"
                label="Dossier"
              />
            )}
          </div>
        </div>

        <Stack
          spacing="2rem"
          direction="row"
          divider={
            <Divider orientation="vertical" flexItem />
          }
          className={styles.data}
          sx={{ flexWrap: 'wrap' }}
        >
          {renderField('País | Country', project.country)}
          {renderField('Género | Genre', project.genre)}
          {renderField(
            'Subgénero | Subgenre',
            project.subGenres,
          )}
          {renderField(
            'Duración aprox. | Time approx.',
            project.runTime,
          )}
        </Stack>

        <div className={styles.section}>
          <p className={styles.subtitle}>
            Sinopsis | Synopsis:
          </p>
          <div className={styles.double__text}>
            <div className={styles.text_column}>
              <p>{project.sinopsis}</p>
            </div>
            <Divider orientation="vertical" flexItem />
            <div className={styles.text_column}>
              <p>{project.sinopsisEng}</p>
            </div>
          </div>
        </div>

        {project.trailer && (
          <div className={styles.section}>
            <MovieTrailer trailerUrl={project.trailer} />
          </div>
        )}

        <Stack
          direction="row"
          className={styles.dir_prod__container}
          sx={{ flexWrap: 'wrap' }}
        >
          <div className={styles.director}>
            <div className={styles.photo_container}>
              <img
                alt="director"
                src={project.directorPhoto?.url}
                onError={e => {
                  e.target.src =
                    '/assets/img/img_coming_soon.jpg'
                }}
              />
            </div>
            <span>
              {renderField(
                'Director | Director:',
                project.director,
              )}
            </span>
          </div>

          <div className={styles.producer}>
            <div className={styles.photo_container}>
              <img
                alt="producer"
                src={project.producerPhoto?.url}
                onError={e => {
                  e.target.src =
                    '/assets/img/img_coming_soon.jpg'
                }}
              />
            </div>
            {renderField(
              'Productor | Producer:',
              project.producer,
            )}
          </div>
        </Stack>

        {project.recognitions?.length > 0 && (
          <div className={styles.section}>
            <p className={styles.subtitle}>
              Reconocimientos | Recognitions:
            </p>
            <ul className={styles.recognitions}>
              {project.recognitions.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <div className={styles.section}>
          <p className={styles.subtitle}>
            En busca de | In need of:
          </p>
          <div className={styles.double__text}>
            <div className={styles.text_column}>
              <p>{project.needs}</p>
            </div>
            <Divider orientation="vertical" flexItem />
            <div className={styles.text_column}>
              <p>{project.needsENG}</p>
            </div>
          </div>
        </div>

        {project.stills?.length > 0 && (
          <div className={styles.stills_gallery}>
            <p className={styles.subtitle}>
              Fotogramas | Stills:
            </p>
            <div className={styles.stills_container}>
              {project.stills.map((still, index) => (
                <img
                  key={index}
                  src={still.url}
                  alt={`Still ${index + 1}`}
                  className={styles.still_image}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Project
