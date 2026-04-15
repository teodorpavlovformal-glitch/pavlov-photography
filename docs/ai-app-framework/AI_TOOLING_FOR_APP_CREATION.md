# AI Tooling For App Creation

This file explains what an AI assistant needs in order to build apps well, and which capabilities are most useful.

## 1. What The AI Should Be Able To Do

At minimum, the AI should have:

- file reading
- file editing
- terminal access
- browser or end-to-end verification ability
- deployment awareness
- planning ability
- debugging ability

Without these, the human has to manually bridge too many gaps.

## 2. Most Useful AI Workflow Layers

### Planning Layer

Needed for:
- product framing
- architecture choices
- route planning
- auth and database decisions

### Implementation Layer

Needed for:
- writing and editing code
- structuring folders
- wiring dependencies
- integrating services

### Verification Layer

Needed for:
- testing forms
- opening menus and dialogs
- verifying loading and error states
- checking phone-sized layouts

### Deployment Layer

Needed for:
- GitHub repo setup
- branch awareness
- Vercel linking and deployment
- post-deploy verification

## 3. Codex Skills Most Useful For Apps

### Planning And Product

- `brainstorming`
- `plan-work`
- `writing-plans`

### UI And Frontend

- `frontend-skill`
- `frontend-design`
- `ui-ux-pro-max`

### React And Next

- `build-web-apps:react-best-practices`
- `vercel-plugin:nextjs`
- `vercel-plugin:next-best-practices`

### Debugging And QA

- `bug-triage`
- `systematic-debugging`
- `investigate`
- `verification-before-completion`
- `browse`
- `qa`

### Deployment And Shipping

- `vercel-deploy`
- `ship`
- `commit-work`
- `create-pr`

### Security And Review

- `cso`
- `review`

## 4. Plugins Most Useful For Apps

### Build Web Apps

Use for:
- frontend guidance
- React and app-building practices
- deployment-related web workflows

### GitHub

Use for:
- repository setup
- PRs
- CI
- publishing

### Vercel

Use for:
- deployment
- deployment inspection
- production debugging

### Vercel-plugin

Use for:
- deeper framework and platform guidance
- Next.js best practices
- Vercel-specific deployment and runtime details

## 5. What To Tell The AI At The Start

For best results, always tell the AI:

- what kind of app it is
- who it is for
- what the core workflow is
- what the stack should be
- what auth or database choice is already decided
- whether you want fast startup or maximum control
- whether deployment should be Vercel-first

## 6. Best Default Prompting Pattern

Give the AI:

1. a brief
2. the chosen stack
3. the desired quality bar
4. the rule that it should plan before coding
5. the rule that it should verify interactions before calling work done

## 7. Most Common AI Failure Patterns In App Work

- choosing too many dependencies
- mixing multiple auth systems
- adding Redux or global state too early
- building screens before locking data flow
- forgetting empty and error states
- shipping forms without validation
- testing only desktop
- not checking deployment until too late

## 8. Best Human Plus AI Working Pattern

1. human decides business goal
2. AI helps choose stack
3. AI proposes plan
4. human approves plan
5. AI implements in small verified slices
6. AI verifies locally
7. human checks visually
8. AI helps push and deploy

That pattern is much more reliable than asking the AI to improvise the whole product without checkpoints.
