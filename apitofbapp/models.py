from django.contrib.auth.models import User
from django.db import models

# Create your models here.


class FacebookStatus(models.Model):

    class Meta:
        verbose_name_plural = 'Facebook Statuses'
        ordering = ['publish_timestamp']

    DRAFT = 'draft'
    APPROVED = 'approved'
    STATUS = (
        (DRAFT, 'Draft'),
        (APPROVED, 'Approved'),
    )
    status = models.CharField(max_length=255,
        choices=STATUS, default=DRAFT)
    publish_timestamp = models.DateTimeField(null=True, blank=True)
    author = models.ForeignKey(User)
    message = models.TextField(max_length=255)
    link = models.URLField(null=True, blank=True)

    def __unicode__(self):
        return u"{}".format(self.message)
