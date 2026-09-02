export function SiteFooter() {
  return (
    <footer className="bg-background border-t">
      <div className="container-wrapper px-4 xl:px-6">
        <div className="text-muted-foreground flex min-h-(--footer-height) flex-col items-center justify-center gap-1 py-4 text-center text-xs leading-loose sm:text-sm">
          <span>krdscn/ui용으로 제작되었습니다. 소스 코드와 레지스트리는 GitHub Pages에서 제공합니다.</span>
          <span>
            KRDS 가이드라인 콘텐츠는 행정안전부 「디지털 정부서비스 UI/UX 가이드라인(2025.08)」(
            <a href="https://www.krds.go.kr/" className="underline underline-offset-2" target="_blank" rel="noreferrer">
              krds.go.kr
            </a>
            )을 출처로 하며, 저작권법 제24조의2에 따라 출처를 표시하여 이용합니다. 소스 코드는 MIT 라이선스입니다.
          </span>
        </div>
      </div>
    </footer>
  )
}
