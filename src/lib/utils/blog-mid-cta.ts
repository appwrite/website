import { getAppwriteDashboardUrl } from '$lib/utils/dashboard';
import { DEFAULT_CTA_POINTS, resolveBlogCta, type BlogCtaConfig } from '$lib/utils/blog-cta';

export type BlogCallToActionInput =
    | (Partial<
          BlogCtaConfig & {
              url?: string;
              points?: string[];
          }
      > & {
          href?: string;
      })
    | boolean
    | undefined;

type FooterCtaProps = {
    heading: string;
    label: string;
    href: string;
    description?: string;
    event?: string;
};

export type InlineCtaProps = {
    title: string;
    description?: string;
    point1: string;
    point2: string;
    point3: string;
    point4: string;
    cta: string;
    url: string;
    event?: string;
};

export interface PrepareBlogCtaOptions {
    callToAction: BlogCallToActionInput;
    announcement: boolean;
    category: string;
    slug: string;
    rawContent?: string | null;
}

export interface BlogCtaState {
    midCta: { targetIndex: number; props: InlineCtaProps } | null;
    footerCtaProps: FooterCtaProps | null;
}

const getMidCtaTargetIndex = (rawContent: string | null): number | null => {
    const body = rawContent?.replace(/^---[\s\S]*?---\s*/, '') ?? '';

    const headings = body.match(/^(?:\s{0,3})#\s+.+$/gm);
    const count = headings ? headings.length : 0;

    if (count < 2) {
        return null;
    }

    return Math.min(count, Math.ceil(count / 2) + 1);
};

const hasManualMidCta = (rawContent?: string | null) =>
    /\{%\s*call_to_action\b/i.test(rawContent ?? '');

const normalizePoints = (points?: string[]): [string, string, string, string] => {
    const safePoints = Array.isArray(points)
        ? points.filter((point): point is string => typeof point === 'string')
        : [];

    return [
        safePoints[0] ?? DEFAULT_CTA_POINTS[0],
        safePoints[1] ?? DEFAULT_CTA_POINTS[1],
        safePoints[2] ?? DEFAULT_CTA_POINTS[2],
        safePoints[3] ?? DEFAULT_CTA_POINTS[3]
    ];
};

export const prepareBlogCtaState = ({
    callToAction,
    announcement,
    category,
    slug,
    rawContent
}: PrepareBlogCtaOptions): BlogCtaState => {
    const manualOverride = typeof callToAction === 'object' && callToAction !== null;
    const shouldAutoGenerate = !manualOverride && (callToAction ?? true) && !announcement;
    const targetHeadingIndex = getMidCtaTargetIndex(rawContent ?? null);

    const cta: BlogCtaConfig | null = manualOverride
        ? (() => {
              const [point1, point2, point3, point4] = normalizePoints(callToAction.points);
              return {
                  heading: callToAction.heading ?? 'Start building with Appwrite today',
                  label: callToAction.label ?? 'Get started',
                  href: callToAction.href ?? callToAction.url ?? getAppwriteDashboardUrl(),
                  description: callToAction.description ?? '',
                  event: callToAction.event,
                  points: [point1, point2, point3, point4]
              };
          })()
        : shouldAutoGenerate
          ? resolveBlogCta(category, slug, rawContent)
          : null;

    const midCta =
        cta && targetHeadingIndex !== null && !announcement && !hasManualMidCta(rawContent)
            ? {
                  targetIndex: targetHeadingIndex,
                  props: {
                      title: cta.heading,
                      description: cta.description,
                      point1: cta.points[0],
                      point2: cta.points[1],
                      point3: cta.points[2],
                      point4: cta.points[3],
                      cta: cta.label,
                      url: cta.href,
                      event: cta.event
                  } satisfies InlineCtaProps
              }
            : null;

    const footerCtaProps: FooterCtaProps | null =
        manualOverride && cta
            ? {
                  heading: cta.heading,
                  label: cta.label,
                  href: cta.href,
                  description: cta.description,
                  event: cta.event
              }
            : null;

    return {
        midCta,
        footerCtaProps
    };
};
