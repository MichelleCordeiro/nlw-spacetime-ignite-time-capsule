'use client'

import { ChangeEvent, useState } from 'react'

export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)
  // const [previewVideo, setPreviewVideo] = useState<string | null>(null)

  // hack p descobrir qual tipo de evento passar
  // para o mouse sobre o onChange q ele mostrará 'ChangeEventHandler'
  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    // console.log(event.target.files)
    const { files } = event.target

    if (!files) {
      return
    }

    const previewURL = URL.createObjectURL(files[0])
    setPreview(previewURL)

    // const previewVideoURL = URL.createObjectURL(files[0])
    // setPreviewVideo(previewVideoURL)
  }

  return (
    <>
      <input
        onChange={onFileSelected}
        type="file"
        id="media"
        name="coverUrl"
        accept="image/*, video/*"
        className="invisible h-0 w-0"
      />
      {preview && (
        // eslint-disable-next-line
        <img
          src={preview}
          alt=""
          className="aspect-video w-full rounded-lg object-cover"
        />
      )}
      {/* {previewVideo && (
        // eslint-disable-next-line
        <video
          src={previewVideo}
          alt=""
          className="aspect-video w-full rounded-lg object-cover"
          controls
        />
      )} */}
    </>
  )
}
