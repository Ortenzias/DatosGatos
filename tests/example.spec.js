// @ts-check
import { test, expect, defineConfig, devices } from '@playwright/test';

const LOCALHOST_URL = 'http://localhost:5173/'
const GATO_ENDPOINT_IMAGE_URL = 'https://api.thecatapi.com'

test('imagen random con imagen', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.getByRole("paragraph")
  const image = await page.getByRole("img")

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute("src")

  await expect(textContent).not.toBeNull()
  await expect(imageSrc?.startsWith(GATO_ENDPOINT_IMAGE_URL)).toBeTruthy()

});
