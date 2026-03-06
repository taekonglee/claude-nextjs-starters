import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

/**
 * 설정 페이지
 * 프로필, 알림, 보안 섹션으로 구성됩니다.
 */
export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">설정</h1>
        <p className="text-muted-foreground">계정 및 애플리케이션 설정을 관리하세요.</p>
      </div>

      {/* 프로필 설정 */}
      <Card>
        <CardHeader>
          <CardTitle>프로필</CardTitle>
          <CardDescription>공개 프로필 정보를 업데이트합니다.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">이름</Label>
              <Input id="firstName" placeholder="홍" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">성</Label>
              <Input id="lastName" placeholder="길동" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input id="email" type="email" placeholder="hong@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">소개</Label>
            <Input id="bio" placeholder="간단한 자기소개를 입력하세요." />
          </div>
          <Button>프로필 저장</Button>
        </CardContent>
      </Card>

      <Separator />

      {/* 알림 설정 */}
      <Card>
        <CardHeader>
          <CardTitle>알림</CardTitle>
          <CardDescription>이메일 및 푸시 알림 설정을 관리합니다.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">마케팅 이메일</p>
              <p className="text-xs text-muted-foreground">새 기능 및 업데이트 소식을 받습니다.</p>
            </div>
            <Badge variant="outline" className="text-xs">비활성</Badge>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">보안 알림</p>
              <p className="text-xs text-muted-foreground">계정 로그인 및 보안 이벤트 알림을 받습니다.</p>
            </div>
            <Badge className="text-xs">활성</Badge>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">주간 리포트</p>
              <p className="text-xs text-muted-foreground">매주 통계 요약 리포트를 받습니다.</p>
            </div>
            <Badge className="text-xs">활성</Badge>
          </div>
          <Button variant="outline">알림 설정 저장</Button>
        </CardContent>
      </Card>

      <Separator />

      {/* 보안 설정 */}
      <Card>
        <CardHeader>
          <CardTitle>보안</CardTitle>
          <CardDescription>비밀번호 및 계정 보안을 관리합니다.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="currentPassword">현재 비밀번호</Label>
            <Input id="currentPassword" type="password" placeholder="현재 비밀번호 입력" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="newPassword">새 비밀번호</Label>
            <Input id="newPassword" type="password" placeholder="새 비밀번호 입력" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">비밀번호 확인</Label>
            <Input id="confirmPassword" type="password" placeholder="새 비밀번호 재입력" />
          </div>
          <Button variant="destructive">비밀번호 변경</Button>
        </CardContent>
      </Card>
    </div>
  );
}
