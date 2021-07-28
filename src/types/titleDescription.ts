export type titleDescription =
  | {
      title?: never
      description?: never
    }
  | {
      /** Заголовок, максимум 80 символов */
      title: string

      /** Подзаголовок, максимум 80 символов */
      description: string
    }
